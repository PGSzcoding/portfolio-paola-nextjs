import { NextResponse } from 'next/server';

const MODEL = 'openai/gpt-oss-20b:free';
const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 800;

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const profile = `You are Paola Gutierrez's AI Twin for her developer portfolio. Answer only questions about Paola's professional profile, career, skills, projects, work style, and portfolio. Paola is a Full-Stack Software Engineer with 5+ years of experience. Her frontend focus includes React, Next.js, TypeScript, Svelte, Angular, accessibility, performance, and design. She also works with Node.js, APIs, databases, AWS, Firebase, Supabase, MongoDB, and Sanity. Her portfolio includes Proofs & Trials, Layout Alemán, a Hospitality Platform, BookShelf, Tekoestudio, and a real-time Chat App. Do not invent employers, education, exact dates, client details, availability, contact details, or project metrics beyond this context. If information is unavailable, say so clearly and suggest contacting Paola. Keep answers concise, warm, and professional. Reply in the same language as the visitor.`;

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== 'object') return false;
  const message = value as Record<string, unknown>;
  return (message.role === 'user' || message.role === 'assistant') &&
    typeof message.content === 'string' &&
    message.content.trim().length > 0 &&
    message.content.length <= MAX_MESSAGE_LENGTH;
}

export async function POST(request: Request) {
  if (!process.env.OPENROUTER_API_KEY) {
    return NextResponse.json({ error: 'AI Twin is not configured.' }, { status: 503 });
  }

  try {
    const body = await request.json();
    const messages = Array.isArray(body.messages) ? body.messages.filter(isChatMessage).slice(-MAX_MESSAGES) : [];

    if (!messages.length) {
      return NextResponse.json({ error: 'Please enter a question.' }, { status: 400 });
    }

    const origin = request.headers.get('origin') ?? new URL(request.url).origin;
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': origin,
        'X-OpenRouter-Title': "Paola's AI Twin",
      },
      body: JSON.stringify({ model: MODEL, messages: [{ role: 'system', content: profile }, ...messages], max_tokens: 350, temperature: 0.5 }),
    });
    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!response.ok || typeof content !== 'string') {
      return NextResponse.json({ error: data.error?.message ?? 'Unable to answer right now.' }, { status: response.status || 502 });
    }
    return NextResponse.json({ message: content.trim() });
  } catch {
    return NextResponse.json({ error: 'Unable to answer right now.' }, { status: 500 });
  }
}

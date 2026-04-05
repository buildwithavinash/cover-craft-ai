const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const generateContent = async (data) => {
  try {
    const prompt = `
You are an expert career coach.

Generate a ${data.tone} ${data.output}.

Job Description: ${data.jd}
Skills: ${data.skills.join(", ")}
Experience: ${data.experience}

Keep it under 200 words. Sound human.
Return only the final text.
    `

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1024
      })
    });

    const dataRes = await response.json();
    return dataRes.choices[0].message.content;

  } catch (error) {
    throw new Error(error);
  }
}
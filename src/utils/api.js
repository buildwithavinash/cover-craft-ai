const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

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

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{text: prompt}]
                        }
                    ]
                })
            })

            const dataRes = await response.json()

            return dataRes.candidates[0].content.parts[0].text;
        }catch(error){
            throw new Error(error);
        }
}
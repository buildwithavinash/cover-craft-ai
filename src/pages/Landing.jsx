import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl p-4 mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col min-h-[60vh] gap-4 justify-center items-center mt-8">
        <h1 className="text-3xl text-center md:text-6xl font-bold text-slate-900 dark:text-slate-200">
          AI Cover Letter Generator
        </h1>
        <p className="text-slate-700 dark:text-slate-400 text-center text-lg max-w-2xl">
          Instantly generate personalized cover letters and cold emails tailored
          to your job application. Save, edit, and manage your results with
          ease.
        </p>
        <button
          onClick={() => navigate("/form")}
          className="bg-emerald-400 text-slate-100 px-6 py-2 border border-slate-300 self-center dark:border-slate-700 rounded-xl font-semibold cursor-pointer text-lg shadow hover:bg-emerald-500 transition-all duration-200"
        >
          Try Demo
        </button>
      </div>

      {/* How It Works Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-sky-100 text-sky-500 rounded-xl px-3 py-2 mb-2 text-3xl">
              <i className="ri-edit-2-line"></i>
            </div>
            <h3 className="font-bold mb-1 dark:text-slate-200">1. Enter Details</h3>
            <p className="dark:text-slate-400">
              Fill in your job description, skills, and experience. Choose your
              preferred tone and output type.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-emerald-100 text-emerald-500 rounded-xl px-3 py-2 mb-2 text-3xl">
              <i className="ri-magic-line"></i>
            </div>
            <h3 className="font-bold mb-1 dark:text-slate-200">2. Generate Letter</h3>
            <p className="dark:text-slate-400">
              Our AI crafts a unique, professional cover letter or cold email in
              seconds.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 text-yellow-500 rounded-xl px-3 py-2 mb-2 text-3xl">
              <i className="ri-save-3-line"></i>
            </div>
            <h3 className="font-bold mb-1 dark:text-slate-200">3. Save & Use</h3>
            <p className="dark:text-slate-400">
              Copy, edit, or save your letter. Access your history anytime and
              manage your results.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-center mb-8 dark:text-slate-200">Features</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 text-slate-500 rounded-xl px-3 py-2 mb-2 text-3xl">
              <i className="ri-robot-2-line"></i>
            </div>
            <h3 className="font-bold mb-1 dark:text-slate-200">AI-Powered</h3>
            <p className="dark:text-slate-400">Generates cover letters and cold emails using advanced AI.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 text-slate-500 rounded-xl px-3 py-2 mb-2 text-3xl">
              <i className="ri-user-settings-line"></i>
            </div>
            <h3 className="font-bold mb-1 dark:text-slate-200">Personalized</h3>
            <p className="dark:text-slate-400">
              Customize with your job description, skills, experience, and tone.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 text-slate-500 rounded-xl px-3 py-2 mb-2 text-3xl">
              <i className="ri-history-line"></i>
            </div>
            <h3 className="font-bold mb-1 dark:text-slate-200">History & Management</h3>
            <p className="dark:text-slate-400">
              Save, view, delete, and clear up to 10 previous results. Click to
              view details.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 text-slate-500 rounded-xl px-3 py-2 mb-2 text-3xl">
              <i className="ri-edit-box-line"></i>
            </div>
            <h3 className="font-bold mb-1 dark:text-slate-200">Edit & Copy</h3>
            <p className="dark:text-slate-400">
              Edit generated letters, copy to clipboard, and regenerate as
              needed.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Output Section */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-center mb-8 dark:text-slate-200">
          Sample Output
        </h2>
        <div className="bg-slate-200 border border-slate-200 rounded-xl shadow-md p-6 max-w-2xl mx-auto">
          <p className="text-slate-900 whitespace-pre-line">
            {`Dear Hiring Manager,\n\nI am excited to apply for the Frontend Developer position at your company. With 3 years of experience in React, JavaScript, and UI/UX design, I have a proven track record of building responsive and user-friendly web applications. My skills in collaborating with cross-functional teams and delivering high-quality code align well with your requirements.\n\nI am eager to contribute my expertise and passion for frontend development to your team.\n\nSincerely,\nJohn Doe`}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-20 mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8 dark:text-slate-200">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="font-bold dark:text-slate-300">Is this free to use?</h3>
            <p className="dark:text-slate-400">Yes, you can generate and manage cover letters for free.</p>
          </div>
          <div>
            <h3 className="font-bold dark:text-slate-300">Can I edit the generated letter?</h3>
            <p className="dark:text-slate-400">
              Absolutely! You can edit, copy, and even regenerate your letter as
              needed.
            </p>
          </div>
          <div>
            <h3 className="font-bold dark:text-slate-300">How many results can I save?</h3>
            <p className="dark:text-slate-400">
              You can save up to 10 results in your history. You can also delete
              or clear all results.
            </p>
          </div>
          <div>
            <h3 className="font-bold dark:text-slate-300">Is my data safe?</h3>
            <p className="dark:text-slate-400">
              Your data is stored only in your browser and is never shared.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
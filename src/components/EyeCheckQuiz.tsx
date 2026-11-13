import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Phone,
  MessageSquare,
  ShieldCheck,
  Eye,
  Glasses,
  Sun,
  Activity,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    weight: 'cataract' | 'glaucoma' | 'refraction' | 'dryeye' | 'healthy';
  }[];
}

const quizQuestions: Question[] = [
  {
    id: 1,
    title: 'What is your age group?',
    subtitle: 'Eye health risks shift significantly at different stages of life.',
    options: [
      { label: 'Under 35 years', description: 'Screen strain, refractive errors, dry eye risks', weight: 'refraction' },
      { label: '35 to 50 years', description: 'Early presbyopia (reading difficulty), eye pressure changes', weight: 'glaucoma' },
      { label: '50 to 65 years', description: 'Onset of lens opacity, cataract formation, reading fatigue', weight: 'cataract' },
      { label: 'Over 65 years', description: 'High prevalence of mature cataract, retinal changes', weight: 'cataract' },
    ],
  },
  {
    id: 2,
    title: 'Which visual disturbance affects you most?',
    subtitle: 'Select the primary symptom you or your family member experience.',
    options: [
      { label: 'Cloudy / misty vision or night glare from headlights', description: 'Feeling like looking through a foggy window', weight: 'cataract' },
      { label: 'Blurry text when reading books or using smartphone', description: 'Holding phone further away to read clearly', weight: 'refraction' },
      { label: 'Frequent eye fatigue, burning, red eyes or dryness', description: 'Gritty feeling after working or being in dust', weight: 'dryeye' },
      { label: 'Gradual loss of peripheral / side vision or dark spots', description: 'Tunnel vision or difficulty seeing steps', weight: 'glaucoma' },
    ],
  },
  {
    id: 3,
    title: 'How long have you noticed these visual changes?',
    subtitle: 'Duration helps our clinical specialists assess urgency.',
    options: [
      { label: 'Just started recently (last few weeks)', description: 'Acute onset or seasonal trigger', weight: 'dryeye' },
      { label: 'Past 3 to 6 months', description: 'Progressive visual change', weight: 'refraction' },
      { label: 'Gradually worsening over 1 to 2+ years', description: 'Typical progression curve for cataract', weight: 'cataract' },
      { label: 'Intermittent with headaches & eye pressure', description: 'Requires immediate IOP screening', weight: 'glaucoma' },
    ],
  },
  {
    id: 4,
    title: 'Do you have any existing health conditions?',
    subtitle: 'Systemic health has a direct relationship with ocular vitality.',
    options: [
      { label: 'Diabetes or high blood sugar', description: 'Requires mandatory retinal screening for retinopathy', weight: 'glaucoma' },
      { label: 'Hypertension (High Blood Pressure)', description: 'Risk factor for retinal vascular changes', weight: 'glaucoma' },
      { label: 'Previous eye surgery or wear glasses for years', description: 'Power shift or intraocular checkup', weight: 'cataract' },
      { label: 'None / generally healthy', description: 'Preventive eye checkup is recommended', weight: 'healthy' },
    ],
  },
];

export const EyeCheckQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  const handleSelectOption = (weight: string) => {
    const updated = [...answers, weight];
    setAnswers(updated);
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setCompleted(false);
  };

  // Determine recommendation based on majority answer
  const cataractCount = answers.filter((a) => a === 'cataract').length;
  const glaucomaCount = answers.filter((a) => a === 'glaucoma').length;
  const refractionCount = answers.filter((a) => a === 'refraction').length;
  const dryeyeCount = answers.filter((a) => a === 'dryeye').length;

  let recommendation = {
    title: 'Comprehensive Cataract & Slit-Lamp Evaluation',
    service: 'Cataract Evaluation',
    doctor: 'Dr. J.D. Mandal (MBBS, D.O.M.S.)',
    description:
      'Your responses indicate classic indicators of progressive crystalline lens opacity (Cataract). We recommend a thorough slit-lamp biomicroscopy and optical biometry checkup at TOPSUN HOSPITAL.',
    urgency: 'Recommended within 1-2 weeks',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-300',
  };

  if (glaucomaCount >= 2) {
    recommendation = {
      title: 'Glaucoma & Dilated Retinal Screening',
      service: 'Glaucoma Evaluation',
      doctor: 'Dr. J.D. Mandal & Dr. Khurshid',
      description:
        'Your profile suggests risk factors associated with optic nerve pressure or vascular changes. A non-contact tonometry and fundus examination is strongly advised.',
      urgency: 'Prompt evaluation advised',
      tagColor: 'bg-rose-100 text-rose-800 border-rose-300',
    };
  } else if (refractionCount >= 2) {
    recommendation = {
      title: 'Digital Refraction & Vision Assessment',
      service: 'Refractive Error Evaluation',
      doctor: 'Dr. J.D. Mandal',
      description:
        'Your symptoms suggest refractive blur, presbyopia, or eyeglass power mismatch. A digital Snellen acuity test and computerized autorefraction will restore sharp comfort.',
      urgency: 'Schedule at convenience',
      tagColor: 'bg-blue-100 text-blue-800 border-blue-300',
    };
  } else if (dryeyeCount >= 2) {
    recommendation = {
      title: 'Dry Eye & Ocular Surface Assessment',
      service: 'Dry Eye Assessment',
      doctor: 'Dr. J.D. Mandal',
      description:
        'Your symptoms match tear film instability and digital eye strain. We can prescribe targeted ocular lubricating drops and check corneal surface health.',
      urgency: 'Schedule at convenience',
      tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    };
  }

  const whatsappQuizUrl = getWhatsAppUrl(
    `Hello TOPSUN Hospital, I completed your Online Eye Health Assessment. Result recommended: ${recommendation.title}. I would like to book an appointment with ${recommendation.doctor}.`
  );

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-soft text-secondary border border-secondary/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span>1-Minute Online Vision Screener</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C2434] tracking-tight">
            Check Your Eye Health Symptoms
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brandText-muted leading-relaxed">
            Answer 4 simple questions to receive an instant clinical assessment and tailored recommendations from the TOPSUN HOSPITAL ophthalmic team.
          </p>
        </div>

        {/* Card */}
        <div className="bg-gradient-to-br from-brandBgLight via-white to-primary-soft/30 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-premium relative overflow-hidden">
          {!completed ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                  <span>
                    Question {currentStep + 1} of {quizQuestions.length}
                  </span>
                  <span className="text-primary">
                    {Math.round(((currentStep + 1) / quizQuestions.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-[#1C2434]">
                  {quizQuestions[currentStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-brandText-muted mt-1">
                  {quizQuestions[currentStep].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {quizQuestions[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.weight)}
                    className="flex flex-col text-left p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-primary hover:shadow-md hover:bg-primary-soft/30 transition-all active:scale-[0.98] group"
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-sm sm:text-base font-bold text-[#1C2434] group-hover:text-primary transition-colors">
                        {opt.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <span className="text-xs text-brandText-muted leading-relaxed">
                      {opt.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-secondary flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${recommendation.tagColor} mb-1`}>
                    {recommendation.urgency}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1C2434]">
                    Assessment Result: {recommendation.title}
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {recommendation.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-secondary" />
                    <span>Specialist: <strong>{recommendation.doctor}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-primary" />
                    <span>Facility: <strong>TOPSUN HOSPITAL, Rahika Road</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to={`/contact?service=${encodeURIComponent(recommendation.service)}#appointment`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  <span>Book Appointment for {recommendation.service}</span>
                </Link>

                <a
                  href={whatsappQuizUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>Send Results on WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                  <span>Retake Test</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

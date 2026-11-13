export interface CataractSymptom {
  title: string;
  description: string;
  icon: string;
}

export interface CataractStep {
  step: string;
  title: string;
  description: string;
  clinicalNote: string;
}

export const CATARACT_OVERVIEW = {
  definition:
    'A cataract is a progressive clouding of the natural crystalline lens inside your eye. In a healthy eye, this lens is transparent, allowing light rays to focus crisply onto the retina. When cataract develops, proteins inside the lens clump together, diffusing light and causing vision to appear foggy, hazy, or yellowish, similar to looking through a frosted bathroom window.',
  causes: [
    {
      title: 'Age-Related Changes',
      description: 'The natural aging process is the most common cause as lens proteins undergo structural biochemical breakdown after age 50.',
    },
    {
      title: 'Diabetes & Systemic Conditions',
      description: 'Fluctuating blood glucose levels accelerate metabolic alterations within the lens capsule.',
    },
    {
      title: 'Ultraviolet (UV) Radiation',
      description: 'Prolonged exposure to intense sunlight without UV-filtering eyewear contributes to oxidative stress on lens cells.',
    },
    {
      title: 'Trauma or Previous Eye Injury',
      description: 'Blunt or penetrating ocular injuries can disrupt lens fibers and trigger traumatic cataract.',
    },
    {
      title: 'Prolonged Steroid Medication',
      description: 'Long-term systemic or topical corticosteroid usage can induce posterior subcapsular cataract.',
    },
  ],
  symptoms: [
    {
      title: 'Cloudy, Blurry, or Dim Vision',
      description: 'Everyday sight feels veiled, like viewing the world through a smoky or misty glass pane.',
      icon: 'EyeOff',
    },
    {
      title: 'Night Glare and Halos',
      description: 'Oncoming car headlights, streetlights, or lamps appear uncomfortably bright or display distracting starbursts/halos.',
      icon: 'Sun',
    },
    {
      title: 'Fading or Yellowing of Colors',
      description: 'Vibrant colors lose their intensity and appear duller, muted, or tinted with a yellowish-brown hue.',
      icon: 'Palette',
    },
    {
      title: 'Frequent Prescription Changes',
      description: 'Noticeable shifts in eyeglasses power that do not sustain sharp clarity for long.',
      icon: 'Glasses',
    },
    {
      title: 'Difficulty Reading in Normal Light',
      description: 'Needing progressively brighter illumination for reading, sewing, cooking, or fine manual tasks.',
      icon: 'BookOpen',
    },
    {
      title: 'Double Vision in One Eye',
      description: 'Monocular diplopia where multiple ghost images appear through a single affected eye.',
      icon: 'Layers',
    },
  ],
  whenIsSurgeryNeeded:
    'Cataract surgery is typically advised when lens cloudiness begins interfering with your normal daily lifestyle—such as reading, driving safely at night, watching television, or performing work. Cataracts do not have to become "ripe" or dense before surgery; in fact, modern phacoemulsification is safer and gentler when performed before the lens turns hyper-mature.',
  phacoemulsificationExplained:
    'Phacoemulsification (often called Phaco) is the gold standard modern technique for cataract removal. Dr. J.D. Mandal creates a micro-incision (typically 2.2 to 2.8 mm) at the edge of the cornea. An ultrasonic probe vibrating at high frequency breaks up (emulsifies) the cloudy lens matter into microscopic fragments, which are gently aspirated. A clear, foldable Intraocular Lens (IOL) is then inserted into the natural lens capsule. The micro-incision is self-sealing and rarely requires traditional stitches.',
  surgeryJourney: [
    {
      step: '01',
      title: 'Pre-Operative Evaluation & Biometry',
      description: 'High-precision optical biometry to determine exact intraocular lens (IOL) power, pupil assessment, and slit-lamp corneal evaluation.',
      clinicalNote: 'Medical clearance review by our clinical team (blood sugar, blood pressure, ECG as needed).',
    },
    {
      step: '02',
      title: 'Day of Surgery & Anesthesia Preparation',
      description: 'Topical eye drops or localized anesthesia administered under the supervision of Dr. Khurshid (Consultant Anesthesiologist) ensuring comfort.',
      clinicalNote: 'Patient remains relaxed and pain-free throughout the 15-25 minute surgical procedure.',
    },
    {
      step: '03',
      title: 'Phacoemulsification & Lens Implantation',
      description: 'Ultrasonic micro-incision emulsification of cloudy lens fibers followed by precision unfolding of the high-grade intraocular lens (IOL).',
      clinicalNote: 'Self-sealing incision requiring no conventional stitches in standard cases.',
    },
    {
      step: '04',
      title: 'Protective Eye Shield & Same-Day Discharge',
      description: 'Eye is protected with a transparent shield. After a brief 1-2 hour observational recovery, the patient returns home comfortably.',
      clinicalNote: 'Written medication and eye drop chart provided with 24-hour on-call support numbers.',
    },
    {
      step: '05',
      title: 'Scheduled Postoperative Follow-up',
      description: 'Mandatory clinical evaluations on Day 1, Week 1, and Month 1 to monitor healing, corneal clarity, and prescribe final glasses.',
      clinicalNote: 'Regular checkups ensure healthy recovery and optimal long-term visual comfort.',
    },
  ],
  postOpCareGuidelines: [
    {
      category: 'Eye Drops Schedule',
      instructions: 'Instill prescribed antibiotic and anti-inflammatory eye drops strictly as directed by the eye specialist. Always wash hands thoroughly before instilling drops.',
    },
    {
      category: 'Protective Eyewear',
      instructions: 'Wear the protective shield during sleep for the first week to avoid accidental rubbing or pressure on the operated eye.',
    },
    {
      category: 'Water & Dust Hygiene',
      instructions: 'Prevent tap water, soap, shampoo, or dusty wind from entering the operated eye for at least 10–14 days. Avoid splashing water directly onto the face.',
    },
    {
      category: 'Physical Activity',
      instructions: 'Refrain from heavy weightlifting, vigorous exercise, bending low abruptly, or swimming during the initial healing period of 2 to 3 weeks.',
    },
    {
      category: 'When to Contact Us Immediately',
      instructions: 'If you experience sudden severe pain, sudden worsening of vision, persistent flash of lights, or heavy redness with sticky discharge, contact TOPSUN HOSPITAL right away on 9709419467.',
    },
  ],
};


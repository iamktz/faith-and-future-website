import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type SpiritualStage = 'flourishing' | 'seeking' | 'wrestling' | 'departing' | 'distant';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: number;
  }[];
}

interface StageResult {
  stage: SpiritualStage;
  title: string;
  description: string;
  encouragement: string;
  nextSteps: string[];
  color: string;
  icon: string;
}

const emailSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
});

type EmailFormData = z.infer<typeof emailSchema>;

export default function Survey() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<StageResult | null>(null);
  const [userEmail, setUserEmail] = useState<string>("");

  const form = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const questions: Question[] = [
    {
      id: 1,
      question: "How would you describe your current connection with your faith?",
      options: [
        { text: "Strong and growing", value: 5 },
        { text: "Generally positive, but with some questions", value: 4 },
        { text: "Struggling and uncertain", value: 3 },
        { text: "Barely hanging on", value: 2 },
        { text: "No longer connected", value: 1 }
      ]
    },
    {
      id: 2,
      question: "How do you feel when you hear faith-related discussions?",
      options: [
        { text: "Encouraged and engaged", value: 5 },
        { text: "Interested but cautious", value: 4 },
        { text: "Conflicted or uncomfortable", value: 3 },
        { text: "Distant or disconnected", value: 2 },
        { text: "Disengaged or resistant", value: 1 }
      ]
    },
    {
      id: 3,
      question: "How often do you experience doubts or big questions about your beliefs?",
      options: [
        { text: "Rarely - my faith feels solid", value: 5 },
        { text: "Sometimes, but I work through them", value: 4 },
        { text: "Frequently, and it's challenging", value: 3 },
        { text: "Almost always - doubt is constant", value: 2 },
        { text: "Constantly - I've lost confidence", value: 1 }
      ]
    },
    {
      id: 4,
      question: "When facing a spiritual struggle, you...",
      options: [
        { text: "Lean in, seek answers and community", value: 5 },
        { text: "Ask questions and seek dialogue", value: 4 },
        { text: "Withdraw or feel alone", value: 3 },
        { text: "Consider leaving faith behind", value: 2 },
        { text: "Feel like you've already left", value: 1 }
      ]
    },
    {
      id: 5,
      question: "How would you describe your prayer or spiritual practice life?",
      options: [
        { text: "Regular and meaningful", value: 5 },
        { text: "Occasional but genuine", value: 4 },
        { text: "Sporadic and uncertain", value: 3 },
        { text: "Rare and feels empty", value: 2 },
        { text: "Non-existent", value: 1 }
      ]
    },
    {
      id: 6,
      question: "When thinking about the future of your faith journey, you feel...",
      options: [
        { text: "Hopeful and excited to grow", value: 5 },
        { text: "Cautiously optimistic", value: 4 },
        { text: "Uncertain but open", value: 3 },
        { text: "Pessimistic or resigned", value: 2 },
        { text: "Convinced it's not for you", value: 1 }
      ]
    },
    {
      id: 7,
      question: "How do you view your questions and doubts about faith?",
      options: [
        { text: "As part of healthy spiritual growth", value: 5 },
        { text: "As challenges to work through", value: 4 },
        { text: "As troubling but manageable", value: 3 },
        { text: "As signs faith might not be true", value: 2 },
        { text: "As confirmation faith isn't for you", value: 1 }
      ]
    }
  ];

  const stageResults: Record<SpiritualStage, StageResult> = {
    flourishing: {
      stage: 'flourishing',
      title: 'Flourishing in Faith',
      description: 'You have a strong, growing relationship with God and see questions as part of healthy spiritual development.',
      encouragement: "Your faith journey is thriving! You have developed a mature perspective that embraces both certainty and mystery. Your openness to growth and questions actually strengthens your foundation.",
      nextSteps: [
        'Explore deeper theological and spiritual topics',
        'Consider mentoring others in their faith journey',
        'Engage with challenging questions to deepen understanding',
        'Share your story to encourage others'
      ],
      color: 'emerald',
      icon: 'fas fa-seedling'
    },
    seeking: {
      stage: 'seeking',
      title: 'Actively Seeking',
      description: 'You maintain faith while honestly wrestling with questions, showing courage in your spiritual exploration.',
      encouragement: "Your willingness to ask hard questions while staying engaged shows incredible courage. This is often where the deepest growth happens - you are not settling for shallow answers.",
      nextSteps: [
        'Join discussion groups for honest faith conversations',
        'Read books that address your specific questions',
        'Connect with mentors who have walked similar paths',
        'Take time for reflection and spiritual practices'
      ],
      color: 'blue',
      icon: 'fas fa-compass'
    },
    wrestling: {
      stage: 'wrestling',
      title: 'Wrestling with Faith',
      description: 'You are in a season of significant struggle and uncertainty, which takes tremendous honesty and bravery.',
      encouragement: "Wrestling with faith does not mean you are failing - it means you are taking it seriously. Many of history's greatest believers went through seasons just like this. You are not alone.",
      nextSteps: [
        'Find safe spaces to express doubts without judgment',
        'Consider professional counseling or spiritual direction',
        'Read stories of others who have wrestled and found hope',
        'Be patient with yourself during this difficult season'
      ],
      color: 'amber',
      icon: 'fas fa-mountain'
    },
    departing: {
      stage: 'departing',
      title: 'Considering Departure',
      description: 'You are seriously questioning whether faith has a place in your future, and that is an honest place to be.',
      encouragement: "It takes courage to be this honest about where you are. Whether you stay or go, your journey matters. There is no shame in needing space to figure things out.",
      nextSteps: [
        'Take time to process without pressure to decide quickly',
        'Consider what specifically troubles you about faith',
        'Explore different perspectives and expressions of spirituality',
        'Connect with others who understand your struggle'
      ],
      color: 'orange',
      icon: 'fas fa-crossroads'
    },
    distant: {
      stage: 'distant',
      title: 'Feeling Distant',
      description: 'Faith feels far away or no longer relevant to your life, and you are exploring what comes next.',
      encouragement: "Thank you for your honesty. Your story and journey matter, regardless of where faith fits. You are always welcome here, whether you are exploring, returning, or just processing.",
      nextSteps: [
        'Take time to heal from any past hurt or disappointment',
        'Explore what values and meaning look like for you now',
        'Stay open to conversation without pressure',
        'Know that doors remain open if you ever want to explore again'
      ],
      color: 'slate',
      icon: 'fas fa-horizon'
    }
  };

  const calculateResult = (answers: number[]): StageResult => {
    const total = answers.reduce((sum, answer) => sum + answer, 0);
    const average = total / answers.length;

    if (average >= 4.5) return stageResults.flourishing;
    if (average >= 3.5) return stageResults.seeking;
    if (average >= 2.5) return stageResults.wrestling;
    if (average >= 1.5) return stageResults.departing;
    return stageResults.distant;
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const calculatedResult = calculateResult(newAnswers);
      setResult(calculatedResult);
      setShowEmailForm(true);
    }
  };

  const handleEmailSubmit = (data: EmailFormData) => {
    setUserEmail(data.email);
    setShowEmailForm(false);
    setShowResult(true);
  };

  const resetSurvey = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowEmailForm(false);
    setShowResult(false);
    setResult(null);
    setUserEmail("");
    form.reset();
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showEmailForm && result) {
    return (
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-blue-600 text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Almost Done!</h2>
              <p className="text-gray-600">
                We'd love to send you your personalized results and resources that match your spiritual stage. 
                Enter your email below to receive your spiritual journey insights.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleEmailSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-700">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  disabled={form.formState.isSubmitting}
                >
                  <i className="fas fa-arrow-right mr-2"></i>
                  {form.formState.isSubmitting ? "Processing..." : "See My Results"}
                </Button>
              </form>
            </Form>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                We respect your privacy. Your email will only be used to send you relevant resources and updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showResult && result) {
    return (
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className={`w-20 h-20 bg-${result.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <i className={`${result.icon} text-${result.color}-600 text-3xl`}></i>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Spiritual Stage: {result.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {result.description}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <i className="fas fa-heart mr-2 text-pink-500"></i>
                A Message for You
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {result.encouragement}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <i className="fas fa-route mr-2 text-blue-500"></i>
                Suggested Next Steps
              </h3>
              <div className="space-y-3">
                {result.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-blue-600 text-sm font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://faithandfuture.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
              >
                <i className="fas fa-book-open mr-2"></i>
                Explore Latest Messages
              </a>
              <Link href="/contact">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  <i className="fas fa-envelope mr-2"></i>
                  Connect With Us
                </Button>
              </Link>
              <Button 
                onClick={resetSurvey}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <i className="fas fa-redo mr-2"></i>
                Retake Survey
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spiritual Journey Diagnostic
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Take a few minutes to explore where you are in your spiritual journey. This thoughtful assessment will help us understand your current stage and provide personalized encouragement.
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-800 font-medium">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>All responses are anonymous and help us better understand your journey</p>
          </div>
        </div>
      </div>
    </section>
  );
}
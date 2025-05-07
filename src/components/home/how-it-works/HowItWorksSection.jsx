import PageContainer from "@/components/PageContainer/PageContainer";
import { FaClipboardList, FaRobot, FaMobile, FaSmileBeam } from "react-icons/fa";

const steps = [
    { icon: <FaClipboardList className="text-primary text-3xl" />, title: "Step 1", desc: "Fill out our quick questionnaire." },
    { icon: <FaRobot className="text-primary text-3xl" />, title: "Step 2", desc: "Let Jesse, our AI host, curate your experience." },
    { icon: <FaMobile className="text-primary text-3xl" />, title: "Step 3", desc: "Manage everything through our app." },
    { icon: <FaSmileBeam className="text-primary text-3xl" />, title: "Step 4", desc: "Enjoy your adventure with our exclusive welcome package." },
];

export default function HowItWorksSection() {
    return (
        <PageContainer>
            <div>
                <h2 className="text-3xl font-bold mb-10 text-gray-800">How It Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {steps.map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-4 rounded-lg shadow hover:shadow-lg transition bg-[#fffcf5]">
                            {item.icon}
                            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </PageContainer>
    );
}

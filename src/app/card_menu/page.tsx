'use client'

import { Header } from "@/components/app-header";
import { useRouter } from "next/navigation";


export default function Menu() {
    const router = useRouter();
    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('/bg.png')"
            }}
        >
            <Header />
            <div className="backdrop-blur-sm bg-white/30 p-6 rounded-xl flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-[#231402] mb-10">
                    Cân Bằng Nhà Ta
                </h1>

                <button
                    onClick={() => router.push('/card_select')}
                    className="button-50 w-[200px] px-6 py-3 bg-[#231402] 
                    text-white rounded-lg text-xl mb-4"
                >
                    Chơi
                </button>

                <div className="text-md italic mt-1">
                    Một trò chơi tương tác về gia đình Việt Nam thời kỳ quá độ lên xã hội chủ nghĩa
                </div>
            </div>
        </div>
    );
}

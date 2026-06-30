"use client";

import React from "react";
import Image from "next/image";

export default function VCMessageSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-primary/5 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#007799]">
            Vice Chancellor&apos;s Message (संवाद)
          </h2>
        </div>

        {/* Quote Card */}
        <div className="relative bg-[#fdfbf7] dark:bg-zinc-950 rounded-3xl p-6 md:p-12 border-l-8 border-l-[#EEA410] border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl overflow-hidden">
          {/* Decorative background crest watermark */}
          <div className="absolute right-4 bottom-4 w-36 h-36 opacity-5 pointer-events-none select-none">
            <Image src="/img/logo1.png" alt="CSU Emblem Watermark" fill className="object-contain" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            
            {/* Profile Image with Gold Frame */}
            <div className="relative h-28 w-28 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#EEA410] shadow-xl">
              <Image 
                src="/img/auth_user.png" 
                alt="Prof. Shrinivasa Varakhedi" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Hindi Endorsement Content */}
            <div className="space-y-5 text-center md:text-left flex-1">
              <span className="text-5xl text-[#EEA410]/20 font-serif leading-none block -mb-6">
                “
              </span>
              <p className="text-zinc-800 dark:text-zinc-200 text-xs md:text-sm leading-relaxed font-sans font-medium text-justify">
                राष्ट्रीय शिक्षा नीति 2020 भारतीय ज्ञान परंपरा और आधुनिक विज्ञान को जोड़ने वाली एक दूरदर्शी पहल है। इसके सफल क्रियान्वयन में संस्कृत सेवी संस्थानों और तकनीकी संगठनों का सहयोग अत्यंत महत्त्वपूर्ण है। मुझे अत्यंत हर्ष है कि केन्द्रीय संस्कृत विश्वविद्यालय और लिटिल गुरु के संयुक्त तत्त्वावधान में ऑनलाइन संस्कृत ओलंपियाड का आयोजन किया जा रहा है। यह ओलंपियाड अखिल भारतीय स्तर पर माध्यमिक तथा उच्च शिक्षा के विद्यार्थियों के लिए एक अभिनव अवसर प्रदान करेगा, जिसके माध्यम से वे नवीनतम यान्त्रिक बुद्धिमत्ता (AI) संचालित प्रौद्योगिकियों और परंपरागत शिक्षण पद्धतियों के समन्वय से, सरल एवं आनंदपूर्ण ढंग से संस्कृत भाषा का अध्ययन कर सकेंगे।
              </p>
              <p className="text-zinc-800 dark:text-zinc-200 text-xs md:text-sm leading-relaxed font-sans font-medium text-justify">
                विशेष रूप से, संस्कृत भाषा की ध्वन्यात्मक शुद्धता, तार्किक संरचना और संक्षिप्त अभिव्यक्ति क्षमता इसे कंप्यूटर विज्ञान एवं कृत्रिम बुद्धिमत्ता (AI) के क्षेत्र में भी उपयोगी बनाती है। यही कारण है कि विश्वभर के अनेक विश्वविद्यालय और अनुसंधान संस्थान संस्कृत को भविष्य की विज्ञान–अनुकूल भाषा मानते हैं।
              </p>
              
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-2">
                <div>
                  <h4 className="font-extrabold text-sm text-[#007799] font-display">
                    प्रो. श्रीनिवास वरखेडी
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-semibold mt-0.5">
                    कुलपति, केन्‍द्रीय संस्‍कृत विश्‍वविद्यालय, नई दिल्‍ली
                  </p>
                </div>
                <span className="text-[9px] bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400 font-bold px-2.5 py-1 rounded-md">
                  Official Endorsement
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

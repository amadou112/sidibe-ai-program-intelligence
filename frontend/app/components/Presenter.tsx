import Image from "next/image";

export default function Presenter({ text, size = "md" }: { text: string; size?: "md" | "lg" }) {
  const avatarSize = size === "lg" ? "w-20 h-20" : "w-14 h-14";

  return (
    <div className="flex items-start gap-4">
      <Image
        src="/team/amadou-sidibe.jpg"
        alt="Amadou Sidibe"
        width={160}
        height={160}
        className={`${avatarSize} rounded-full object-cover border-2 border-primary-200 shadow-soft shrink-0`}
      />
      <div className="relative bg-primary-50 border border-primary-100 rounded-2xl rounded-tl-sm px-5 py-4 text-slate-800">
        <span className="absolute -left-2 top-4 w-4 h-4 bg-primary-50 border-l border-t border-primary-100 rotate-[-45deg]" />
        <p className="relative">{text}</p>
      </div>
    </div>
  );
}

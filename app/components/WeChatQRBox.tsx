import Image from "next/image"

export default function WeChatQRBox() {
    return (
        <div className="mt-8 rounded-lg bg-gray-100 p-6 shadow-sm">
            <p className="mb-4 text-center text-base text-slate-500">
                For enquiries contact <span className="font-bold">Gligor</span>
            </p>
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="/qrcode.jpg"
                    alt="QR Code for Contact"
                    width={200}
                    height={200}
                    className="rounded object-contain"
                />
            </div>
        </div>
    )
}

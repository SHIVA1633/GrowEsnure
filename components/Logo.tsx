import Image from "next/image"

export function Logo() {
  return (
    <div className="h-12 sm:h-20 relative">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20(1)-NQQgrYiSh4Xy6jfKs1Q49hqJ4DyhLF.png"
        alt="Futuredge Solutions Logo"
        width={350}
        height={100}
        className="object-contain w-auto h-full"
        priority
      />
    </div>
  )
}

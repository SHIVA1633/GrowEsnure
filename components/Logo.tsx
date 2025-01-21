import Image from "next/image"

export function Logo() {
  return (
    <div className="h-8 sm:h-12 relative">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20(1)-NQQgrYiSh4Xy6jfKs1Q49hqJ4DyhLF.png"
        alt="Futuredge Solutions Logo"
        width={160}
        height={40}
        className="object-contain w-auto h-full"
        priority
      />
    </div>
  )
}


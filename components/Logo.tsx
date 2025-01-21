import Image from "next/image"

export function Logo() {
  return (
    <div className="h-12 sm:h-20 relative">
      <Image
        src="/placeholder-logo.png"
        alt="Futuredge Solutions Logo"
        width={350}
        height={100}
        className="object-contain w-auto h-full"
        priority
      />
    </div>
  )
}

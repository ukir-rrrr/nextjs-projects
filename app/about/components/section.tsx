import Link from "next/link";

export default function Section({
  title,
  subtitle,
  children
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <section className="py-20 container" >
    <div className="text-center space-y-6 mb-10">
    <h2 className="font-bold text-4xl">{title}</h2>
    <p className="text-muted-foreground">{subtitle}</p>
    </div>

      {children}
    </section>
  );

}
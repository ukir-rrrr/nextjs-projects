import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="py-40 bg-zinc-200 flex items-center">
      <div className="container">
        <h1 className="font-bold text-4xl mb-5 lg:text-6xl">Hero</h1>
        <p className="text-muted-foreground mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, delectus temporibus obcaecati ullam nobis vitae quam perferendis labore, corrupti dicta nisi ipsum exercitationem, incidunt veritatis totam ex vel? Culpa, dolor!
        </p>
        <Button>お問い合わせ</Button>
      </div>
    </div>
  );
}
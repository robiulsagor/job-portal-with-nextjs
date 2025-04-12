interface FeatureCardProps {
    id: number;
    title: string;
    title2: string;
    description: string
}

const FeatureCard = ({ feature }: { feature: FeatureCardProps }) => {
    return (
        <div className=" w-full max-w-[300px]  flex flex-col gap-2">
            <h2 className="text-brand font-semibold text-3xl"> {feature.title} </h2>
            <p className="text-xl font-medium">{feature.title2}</p>
            <p className="text-xs text-slate-600">{feature.description}</p>
        </div>
    )
}

export default FeatureCard
const PageHeader = ({ header }: { header: string }) => {
    return (
        <div className="w-full h-[25vh] bg-black text-white flex items-center justify-center">
            <h1 className="text-4xl font-semibold">{header}</h1>
        </div>
    )
}

export default PageHeader
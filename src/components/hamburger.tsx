const Hamburger = () => {
    return (
        <label className="flex w-8 cursor-pointer flex-col gap-2">
            <input className="peer hidden" type="checkbox" />
            <div className="h-[3px] w-1/2 origin-right rounded-2xl bg-foreground duration-500 peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px] peer-checked:rotate-[225deg]" />
            <div className="h-[3px] w-full rounded-2xl bg-foreground duration-500 peer-checked:-rotate-45" />
            <div className="h-[3px] w-1/2 origin-left place-self-end rounded-2xl bg-foreground duration-500 peer-checked:translate-x-[12px] peer-checked:translate-y-[1px] peer-checked:rotate-[225deg]" />
        </label>
    );
};

export default Hamburger;

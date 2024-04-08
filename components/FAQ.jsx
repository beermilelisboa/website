import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
    {
        q: "Posso participar com menos de 18 anos?",
        a: <span>Não, a Beer Mile Lisboa é exclusiva para maiores de 18 anos. </span>
    },
    {
        q: "Posso participar na mile e nas estafetas?",
        a: <span>Sim, podes participar nas duas ou em apenas em uma das corridas.</span>
    },
    {
        q: "Não tenho equipa para as estafetas posso me inscrever?",
        a: <span>Sim, basta inscreveres-te para a prova das estafetas e a organização faz-te uma equipa.</span>
    },
    {
        q: "A equipa para a prova de estafetas pode ser mista?",
        a: <span>Sim, a prova de estafetas é mista. Apenas as miles são segmentadas por sexo.</span>
    },
    {
        q: "Vai haver modalidade sem álcool?",
        a: <span>Sim, a Beer Mile Lisboa é inclusiva para todos os amantes de cerveja, com ou sem álcool.</span>
    },
    {
        q: "Quais são os métodos de pagamento disponíveis?",
        a: <span>Podes fazer o pagamento através de transferência bancária ou MB WAY. As inscrições com pagamento por transferência bancária são canceladas sem envio de comprovativo.</span>
    },
    {
        q: "É possível assistir à Beer Mile Lisboa?",
        a: <span>Sim, o evento será aberto ao público.</span>
    },
    {
        q: "Onde posso encontrar e saber mais sobre notícias e atualizações da Beer Mile Lisboa?",
        a: <span>Podes acompanhar tudo sobre o evento na nossa página de instagram: <a target="_blank" className="text-sky-800" href="https://instagram.com/beermile_lx">@beermile_lx</a>.</span>
    }

]

export function FAQ() {
    return (
        <div className='w-full flex flex-col space-y-16 items-center drop-shadow-md'>
            <span className='md:text-3xl lg:text-8xl text-6xl text-light-yellow font-extrabold tracking-wider font-impact drop-shadow-lg'>FAQ</span>
            <Accordion type="single" collapsible className="self-center w-[65%] bg-light-yellow rounded-xl text-light-brown font-semibold ">
                {items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className='px-4 rounded-sm rounded-t-xl border-light-brown '>
                        <AccordionTrigger className='text-left font-semibold lg:text-xl drop-shadow-sm mx-1 '>{item.q}</AccordionTrigger>
                        <AccordionContent className='m-2 text-lg drop-shadow-md text-dark-brown'>
                            {item.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

import { VariantProps, cva } from 'class-variance-authority';
import { HTMLProps } from 'react';
import { FC } from 'react';
import { cn } from '@/utilities/utils';

const descriptionVariant = cva('cursor-pointer', {
    variants: {
        variant: {
            description: ['text-xs'],
            productTitle: ['leading-5'],
            titleXl: ['text-2xl', 'font-semibold', 'tracking-wide'],
            titleSm: ['text-sm', 'tracking-wide'],
            price: ['text-xl', 'font-medium'],
            infoSm: ['text-sm', 'text-secondary'],
            infoXs: ['text-xs', 'text-secondary'],
            error: ['text-xs', 'text-red-500'],
        },
    },
    defaultVariants: {
        variant: 'description',
    },
});
interface DescriptionProps
    extends VariantProps<typeof descriptionVariant>,
        HTMLProps<HTMLDivElement> {}

const Text: FC<DescriptionProps> = ({ children, variant, className }) => {
    return (
        <div className={cn(descriptionVariant({ variant, className }))}>
            {children}
        </div>
    );
};

export default Text;

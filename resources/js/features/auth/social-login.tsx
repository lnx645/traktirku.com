import { GoogleIcon } from '@/icons/GoogleIcon';
import { Button } from '@/components/ui/button';
import { LogosFacebook } from '@/icons/FacebookIcon';
import React from 'react';

export default function SocialLogin({disabled}:{disabled:boolean}) {
    return (
        <React.Fragment>
            <div className="flex my-5 gap-2 items-center">
                <div className="h-px w-full border-black bg-secondary"></div>
                <span className=' whitespace-nowrap text-muted-foreground text-xs'>Atau Login Dengan</span>
                <div className="h-px w-full border-black bg-secondary"></div>
            </div>
            <div className="mt-4 flex flex-col  items-center gap-2">
                <Button disabled={disabled} className={"w-full"} variant={'outline'}>
                    <GoogleIcon />
                    <span>Google</span>
                </Button>
                <Button disabled={disabled} className={"w-full"} variant={'outline'}>
                    <LogosFacebook />
                    <span> Facebook</span>
                </Button>
            </div>
        </React.Fragment>
    );
}

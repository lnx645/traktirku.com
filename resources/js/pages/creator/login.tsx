import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { GoogleIcon } from '@/icons/GoogleIcon';
import SocialLogin from '@/features/auth/social-login';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
} from '@/components/ui/input-group';
import { Field, FieldLabel } from '@/components/ui/field';
import { TablerEye } from '@/icons/EyeIcon';
import { MageEmail } from '@/icons/EmailIcon';
import { MageLock } from '@/icons/LockIcon';
import { EyeClose } from '@/icons/EyeClose';
import { useForm } from '@inertiajs/react';
import { loginCreatorAction } from '@/routes';
import { toast } from 'sonner';
export default function LoginCreator() {
    const [isShowPassword, setShowPassword] = useState(false);

    const form = useForm<{
        email: string;
        password: string;
    }>({
        email: '',
        password: '',
    });

    function SetData(e: React.InputEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement;
        if (target.name) {
            form.setData({
                ...form.data,
                [target.name]: target.value,
            });
        }
    }

    function loginAction(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            form.submit(
                loginCreatorAction({
                    role: 'creator',
                }),
                {
                    onFinish() {},
                    onError() {},
                },
            );
        } catch (error) {}
    }

    useEffect(() => {
        Object.values(form.errors).forEach((e) => {
            toast.error(e);
        });
    }, [form.errors]);

    return (
        <React.Fragment>
            <div className="flex min-h-screen w-full items-center justify-center">
                <div className="mx-auto max-w-sm min-w-xs">
                    <div className="mb-7 text-center">
                        <h3 className="text-xl">Login</h3>
                        <p className="text-sm text-muted-foreground">
                            Silahkan login sebagai creator
                        </p>
                    </div>
                    <div className="mb-4">
                        <Field>
                            <InputGroup>
                                <InputGroupAddon>
                                    <MageEmail />
                                </InputGroupAddon>
                                <InputGroupInput
                                    disabled={form.processing}
                                    value={form.data.email}
                                    name="email"
                                    onInput={SetData}
                                    placeholder="Masukan email"
                                />
                            </InputGroup>
                        </Field>
                    </div>
                    <form onSubmit={loginAction} className="mb-4">
                        <Field>
                            <InputGroup>
                                <InputGroupAddon>
                                    <MageLock />
                                </InputGroupAddon>
                                <InputGroupInput
                                    disabled={form.processing}
                                    value={form.data.password}
                                    name="password"
                                    onInput={SetData}
                                    type={isShowPassword ? 'text' : 'password'}
                                    placeholder="Masukan kata sandi"
                                />
                                <InputGroupAddon align={'inline-end'}>
                                    <InputGroupButton
                                        onClick={() => {
                                            setShowPassword(!isShowPassword);
                                        }}
                                    >
                                        {isShowPassword ? (
                                            <TablerEye />
                                        ) : (
                                            <EyeClose />
                                        )}
                                    </InputGroupButton>
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>
                        <div className="mt-3">
                            <Button
                                disabled={form.processing}
                                type="submit"
                                variant={'default'}
                                className={'w-full'}
                            >
                                Login
                            </Button>
                        </div>
                        <SocialLogin disabled={form.processing} />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

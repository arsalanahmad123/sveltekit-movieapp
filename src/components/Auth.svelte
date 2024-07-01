<script>
    import { auth } from '../lib/firebase/firebase';
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { user } from "../store/user"
    $: isloggedin = $user.isLoggedIn
    let email = ''
    let password = ''
    let passwordconfirm = ''
    export let heading;
    export let register;
    let userSubscription;
    function checkUser(){
        if(isloggedin){
            goto('/movies')
        }
    }

    function reset(){
        email = ''
        password = ''
        passwordconfirm = ''
    }

    onMount(() => {
        userSubscription = user.subscribe(value => {
            console.log(value)
        })
        checkUser()
    })
    // ...

const handleAuthentication = async () => {
    if (register === true) {
        if (password !== passwordconfirm) {
            alert('Passwords do not match');
        } else {
            try {
                const credential = await createUserWithEmailAndPassword(auth, email, password);
                reset();
                const userObject = {
                    email: credential.user.email,
                    isLoggedIn: true
                };
                user.set(userObject); // Set the user store
                alert('User created', userObject);
                goto('/');
            } catch (e) {
                alert(e.message);
            }
        }
    } else {
        try {
            const credential = await signInWithEmailAndPassword(auth, email, password);
            reset();
            const userObject = {
                email: credential.user.email,
                isLoggedIn: true
            };
            user.set(userObject); // Set the user store
            alert('User logged in', userObject);
            goto('/');
        } catch (e) {
            alert(e.message);
        }
    }
}


</script>


<div class="container flex justify-center items-center h-screen">
    <div class="flex justify-center items-center">
        <div class="w-full">
            <form class="bg-slate-100 shadow-lg shadow-gray-700 rounded px-8 pt-6 pb-8 mb-4" on:submit|preventDefault={handleAuthentication}>
                <h1 class="font-bold text-5xl text-center mb-5">{heading}</h1>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="email"
                        type="email"
                        placeholder="Email"
                        bind:value={email}
                    />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        class="shadow appearance-none borde rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        name="password"
                        type="password"
                        placeholder="******************"
                        bind:value={password}
                    />
                    <p class="text-red-500 text-xs italic hidden">Please choose a password.</p>
                </div>
                {#if register === true}
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Confirm Password
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        name="password"
                        type="password"
                        placeholder="******************"
                        bind:value={passwordconfirm}
                    />
                    <p class="text-red-500 text-xs italic hidden">Please confirm your password.</p>
                </div>
                {/if}
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        {register === true ? 'Sign Up' : 'Login'}
                    </button>
                </div>
                <div class="mt-2">
                    {#if !register}
                    Don't have an account? <a href="/account/signup" class="text-blue-500">Register</a>
                    {:else}
                    Already have an account? <a href="/account/login" class="text-blue-500">Login</a>
                    {/if}
                </div>
            </form>
        </div>
    </div>
</div>
<script lang="ts">
    // Props
    /** Exposes parent props to this component. */
    export let parent: any;

    // Stores
    import { modalStore } from '@skeletonlabs/skeleton';
    import video from '$lib/assets/videoplayback.mp4';

    // Form Data
    // const formData = {
    //     name: 'Jane Doe',
    //     tel: '214-555-1234',
    //     email: 'jdoe@email.com'
    // };

    // We've created a custom submit function to pass the response and close the modal.
    // function onFormSubmit(): void {
    //     if ($modalStore[0].response) $modalStore[0].response(formData);
    //     modalStore.close();
    // }

    // Base Classes
    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
    const cHeader = 'text-2xl font-bold';
    const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
    <div class="test">
        <h1 class="header">RAM</h1>
        <p class="description">Component Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <video class="video" controls muted>
            <source src={video} type="video/mp4">
            Video is not supported
        </video>
    </div>
{/if}

<style>
    .test {
        position: fixed;
		background-color: #5E5E5E;
		width: 80vw;
		height: 80vh;
		justify-items: center;
		right: 160px;
		top: 110px;
        overflow: scroll;
    }
    .header {
        font-size: 40px;
        padding: 30px;
    }

    .description {
        padding: 30px;
        font-size: 20px;
    }

    .video {
        width: 800px;
        position: absolute;
        justify-self: center;
        margin-left: 18%;
    }
</style>
<script>
	import { enhance } from '$app/forms';
    export let contacts = [];
</script>


<div class="overflow-x-auto w-full mt-6">
    <table class="w-ful">
        <thead class="border border-slate-300 bg-slate-200">
            <tr>
                <th><label>
                    <input type="checkbox" class="checkbox">
                </label></th>
                <th>
                    Name 
                </th>
                <th>Job</th>
                <th>Email</th>
                <th />
            </tr>
        </thead>
        <tbody class="border border-slate-300 bg-white mt-5">
            {#each contacts as contact}
            <tr>
                <th>
                    <label>
                        <input type="checkbox" class="checkbox">
                    </label>
                </th>
                <td>
                    {contact.name}
                </td>
                <td>
                    {contact.company}
                </td>
                <td>
                    {contact.email}
                </td>
                <th>
                    <form method="post" action="?/delete" use:enhance>
                        <input type="hidden" name="id" hidden value={contact.id} />
                    <button class="bg-red-500 hover:bg-red-700 text-white rounded text-sm px-1 py-1">Delete</button>
                    </form>
                </th>
            </tr>
            {/each}
        </tbody>
    </table>
</div>
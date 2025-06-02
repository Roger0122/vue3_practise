<template>
 <div class="modal border rounded p-4 bg-white shadow">
    <header class="modal-header">
      <slot name="header" />
    </header>
    <main class="modal-body">
      <slot name="body" />
    </main>
    <footer class="modal-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup></script>
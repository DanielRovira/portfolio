export default function menu() {
    const checkbox = document.getElementById('close-menu')

    checkbox.addEventListener('change', (event) => {
      if (document.getElementById("close-menu").checked) {
        document.documentElement.style.overflowY='hidden';
      } else {
        document.documentElement.style.overflowY='auto';
      }
    })
}
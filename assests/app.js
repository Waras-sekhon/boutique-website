const items = [
  { name: "Wedding Sarees", url: "women.html" },
  { name: "Salwar Kameez", url: "women.html" },
  { name: "Bridal Lehengas", url: "bridal.html" },
  { name: "Men Kurta Pajama", url: "men.html" },
  { name: "Jaggo Thaal", url: "accessories.html" },
  { name: "Phulkari Dupatta", url: "accessories.html" }
];

const search = document.getElementById("siteSearch");
const results = document.getElementById("searchResults");

search.addEventListener("input", () => {
  const q = search.value.toLowerCase();
  results.innerHTML = "";
  if (!q) return;
  items.filter(i => i.name.toLowerCase().includes(q))
    .forEach(i => {
      const a = document.createElement("a");
      a.href = i.url;
      a.textContent = i.name;
      results.appendChild(a);
    });
});

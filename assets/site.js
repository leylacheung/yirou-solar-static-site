(() => {
  "use strict";

  const aliasToCanonical = new Map([
    ["PNDIT-F3N", "PNDIT-F3N"],
    ["F3N", "PNDIT-F3N"],
    ["BTP-eC9", "BTP-eC9"],
    ["BTP-Ec9", "BTP-eC9"],
    ["PYVR", "PYVR"],
    ["PY-V-r", "PYVR"],
  ]);

  const productDefinitions = [
    ["D18-Cl", "高性能材料", "d18-cl.png"],
    ["H1100", "高性能材料", "h1100.png"],
    ["L8-BO-C4", "高性能材料", "l8-bo-c4.png"],
    ["PYF-T-o", "高性能材料", "pyf-t-o.png"],
    ["m-BTP-PhC6", "高性能材料", "m-btp-phc6.png"],
    ["BTP-eC9", "高性能材料", "btp-ec9.png"],
    ["PY-IT", "高性能材料", "py-it.png"],
    ["PYVR", "高性能材料", "pyvr.png"],
    ["PJ1-R", "高性能材料", "pj1-r.png"],
    ["L8-BO（L8-BO-X）", "高性能材料", "l8-bo-l8-bo-x.png"],
    ["BTP-BO-4Cl（4F）-eC9", "高性能材料", "btp-bo-4cl-4f-ec9.png"],
    ["Y6-BO-4Cl（4F）", "高性能材料", "y6-bo-4cl-4f.png"],
    ["Y6（Y6-1O）", "高性能材料", "y6-y6-1o.png"],
    ["N3", "高性能材料", "n3.png"],
    ["PNDIT-F3N", "高性能材料", "pndit-f3n.png"],
    ["Q1200", "高性能材料", ""],
    ["S1300", "高性能材料", ""],
    ["H3130", "高性能材料", ""],
    ["Br-TT", "并噻吩中间体", "br-tt.png"],
    ["MeO-TT", "并噻吩中间体", "meo-tt.png"],
    ["C11-TT", "并噻吩中间体", "c11-tt.png"],
    ["C11O-TT", "并噻吩中间体", "c11o-tt.png"],
    ["C11-TT-Sn(C4H9)3", "并噻吩中间体", "c11-tt-sn-c4h9-3.png"],
    ["C11O-TT-Sn(C4H9)3", "并噻吩中间体", "c11o-tt-sn-c4h9-3.png"],
    ["IC", "端基", "ic.png"],
    ["IC-oFBr", "端基", "ic-ofbr.png"],
    ["IC-Br", "端基", "ic-br.png"],
    ["IC-CH3", "端基", "ic-ch3.png"],
    ["IC-2Cl", "端基", "ic-2cl.png"],
    ["IC-2F", "端基", "ic-2f.png"],
    ["IC-ClBr（含异构体）", "端基", "ic-clbr.png"],
    ["IC-FBr（含异构体）", "端基", "ic-fbr.png"],
  ];

  const priceEntries = [
    ["PY-IT", "聚合物受体", [{ batch: "好批次", tiers: [["50mg", 2500], ["100mg", 4000]] }, { batch: "标准批次", tiers: [["50mg", 1700], ["100mg", 3000]] }]],
    ["PY-V-r", "聚合物受体", [{ batch: "好批次", tiers: [["50mg", 2900], ["100mg", 4900]] }, { batch: "标准批次", tiers: [["50mg", 2300], ["100mg", 4000]] }]],
    ["PJ1-R", "聚合物受体", [{ batch: "好批次", tiers: [["50mg", 2500], ["100mg", 4400]] }, { batch: "标准批次", tiers: [["50mg", 1700], ["100mg", 3000]] }]],
    ["PYF-T-o", "聚合物受体", [{ batch: "好批次", tiers: [["100mg", 3600], ["250mg", 7500]] }, { batch: "标准批次", tiers: [["100mg", 2700], ["250mg", 6000]] }]],
    ["D18-Cl", "聚合物受体", [{ batch: "好批次", tiers: [["100mg", 3600], ["200mg", 6300], ["500mg", 9800]] }, { batch: "标准批次", tiers: [["100mg", 3000], ["200mg", 5000], ["500mg", 8800]] }]],
    ["PTQ10", "聚合物受体", [{ batch: "", tiers: [["100mg", 2500], ["200mg", 4700]] }]],
    ["F3N", "聚合物受体", [{ batch: "", tiers: [["100mg", 3100], ["200mg", 5500], ["500mg", 9000]] }]],
    ["m-THE", "小分子", [{ batch: "", tiers: [["100mg", 2000], ["500mg", 5500], ["1g", 8500]] }]],
    ["BTP-4F-P2EH", "小分子", [{ batch: "", tiers: [["100mg", 2000], ["500mg", 5500], ["1g", 8500]] }]],
    ["L8-BO", "小分子", [{ batch: "", tiers: [["100mg", 1500], ["500mg", 5000], ["1g", 8500]] }]],
    ["m-BTP-PhC6", "小分子", [{ batch: "", tiers: [["100mg", 2000], ["500mg", 5500], ["1g", 8500]] }]],
    ["BTP-Ec9", "小分子", [{ batch: "", tiers: [["200mg", 2100], ["500mg", 4500], ["1g", 7500]] }]],
    ["BTP-eC9-2F2Cl", "小分子", [{ batch: "", tiers: [["200mg", 3600], ["500mg", 8900]] }]],
    ["Y6", "小分子", [{ batch: "", tiers: [["500mg", 3200], ["1g", 6000]] }]],
    ["Y6-BO-4F", "小分子", [{ batch: "", tiers: [["200mg", 1900], ["500mg", 4200], ["1g", 7000]] }]],
    ["N3", "小分子", [{ batch: "", tiers: [["100mg", 2000], ["200mg", 3000], ["500mg", 6200], ["1g", 10000]] }]],
    ["Y6-1O", "小分子", [{ batch: "", tiers: [["100mg", 2400], ["200mg", 4400], ["500mg", 8500]] }]],
    ["H1100", "小分子", [{ batch: "", tiers: [["100mg", 600], ["1g", 3500], ["10g", 32000]] }]],
    ["Q1200", "小分子", [{ batch: "", tiers: [["100mg", 600], ["1g", 3600], ["10g", 33000]] }]],
    ["S1300", "小分子", [{ batch: "", tiers: [["100mg", 600], ["1g", 3700], ["10g", 34000]] }]],
    ["H3130", "小分子", [{ batch: "", tiers: [["100mg", 700], ["1g", 3900], ["10g", 37000]] }]],
    ["2Br-DT-fDTBT", "小分子", [{ batch: "", tiers: [["2g", 5500]] }]],
    ["Y6-DT-CHO", "小分子", [{ batch: "", tiers: [["1g", 2500]] }]],
    ["IC-2F", "小分子", [{ batch: "", tiers: [["1g", 1200]] }]],
    ["IC-Br(out)", "小分子", [{ batch: "", tiers: [["1g", 4000]] }]],
    ["IC-Br(in)", "小分子", [{ batch: "", tiers: [["1g", 5000]] }]],
    ["PM6", "小分子", [{ batch: "", tiers: [["100mg", 1800], ["500mg", 8000], ["1g", 14000]] }]],
  ];

  function canonicalName(name) {
    return aliasToCanonical.get(name) ?? name;
  }

  function buildProducts() {
    const products = new Map(productDefinitions.map(([sourceName, category, image]) => {
      const name = canonicalName(sourceName);
      return [name, {
        id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
        name,
        aliases: [],
        categories: [category],
        image: image ? `images/products/${image}` : "",
        prices: [],
      }];
    }));

    for (const [sourceName, , groups] of priceEntries) {
      const name = canonicalName(sourceName);
      const product = products.get(name);
      if (!product) continue;
      if (sourceName !== name && !product.aliases.includes(sourceName)) product.aliases.push(sourceName);
      product.prices = groups.map((group) => ({
        batch: group.batch,
        tiers: group.tiers.map(([size, price]) => ({ size, price })),
      }));
    }

    return [...products.values()];
  }

  function formatPrice(value) {
    return `¥${new Intl.NumberFormat("zh-CN").format(value)}`;
  }

  function filterProducts(products, query, category) {
    const needle = query.trim().toLocaleLowerCase("zh-CN");
    return products.filter((product) => {
      const categoryMatch = category === "全部" || product.categories.includes(category);
      const haystack = [product.name, ...product.aliases, ...product.categories].join(" ").toLocaleLowerCase("zh-CN");
      return categoryMatch && (!needle || haystack.includes(needle));
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[character]);
  }

  function productCardMarkup(product) {
    const image = product.image
      ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} 产品结构图" loading="lazy">`
      : '<p class="product-card__missing">结构暂未提供</p>';
    const prices = product.prices.length
      ? product.prices.map((group) => `<section class="price-group">${group.batch ? `<h4>${escapeHtml(group.batch)}</h4>` : ""}<dl>${group.tiers.map((tier) => `<div><dt>${escapeHtml(tier.size)}</dt><dd>${formatPrice(tier.price)}</dd></div>`).join("")}</dl></section>`).join("")
      : '<p class="product-card__inquiry">价格请询价</p>';

    const usesFourSixStructure = product.name === "H1100"
      || product.categories.includes("并噻吩中间体")
      || product.categories.includes("端基");
    const cardClass = usesFourSixStructure
      ? "product-card product-card--structure-4-6"
      : "product-card";

    return `<article class="${cardClass}"><div class="product-card__structure">${image}</div><div class="product-card__details"><h3>${escapeHtml(product.name)}</h3><div class="product-card__tags">${product.categories.map((category) => `<span>${escapeHtml(category)}</span>`).join("")}</div>${product.aliases.length ? `<p class="product-card__aliases">别名：${product.aliases.map(escapeHtml).join(" / ")}</p>` : ""}<div class="product-card__prices">${prices}</div><p class="product-card__tax">含税、含运费</p></div></article>`;
  }

  const catalogRoots = new WeakSet();
  const navigationRoots = new WeakSet();

  function resolveRoot(root) {
    return root ?? (typeof document !== "undefined" ? document : null);
  }

  function initCatalog(root) {
    root = resolveRoot(root);
    if (!root || typeof root.getElementById !== "function" || typeof root.querySelectorAll !== "function" || catalogRoots.has(root)) return;
    const search = root.getElementById("product-search");
    const grid = root.getElementById("product-grid");
    const count = root.getElementById("product-count");
    const noResults = root.getElementById("no-results");
    const buttons = [...root.querySelectorAll("[data-category]")];
    if (!search || !grid || !count || !noResults || buttons.length === 0) return;

    catalogRoots.add(root);

    let selectedCategory = "全部";
    const render = () => {
      const visible = filterProducts(products, search.value, selectedCategory);
      grid.innerHTML = visible.map(productCardMarkup).join("");
      count.textContent = String(visible.length);
      noResults.hidden = visible.length !== 0;
    };

    search.addEventListener("input", render);
    for (const button of buttons) {
      button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;
        for (const candidate of buttons) {
          candidate.setAttribute("aria-pressed", String(candidate === button));
        }
        render();
      });
    }
    render();
  }

  function initNavigation(root) {
    root = resolveRoot(root);
    if (!root || typeof root.getElementById !== "function" || navigationRoots.has(root)) return;
    const toggle = root.getElementById("menu-toggle");
    const nav = root.getElementById("site-nav");
    if (!toggle || !nav) return;

    navigationRoots.add(root);

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    for (const link of nav.querySelectorAll("a")) link.addEventListener("click", () => setOpen(false));
  }

  const products = buildProducts();
  globalThis.YirouCatalog = Object.freeze({
    products,
    canonicalName,
    filterProducts,
    formatPrice,
    productCardMarkup,
    initCatalog,
    initNavigation,
  });

  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
      initCatalog(document);
      initNavigation(document);
    });
  }
})();

import axios from "axios";

const state = {
  items: [],
  total: 0,
  products: [],
};

const getters = {
  cartItems: (state) => state.items,
  total: (state) => state.total,
  products: (state) => state.products,
};

const actions = {
  //asynchronous
  async fetchProducts({ commit }) {
    const response = await axios.get(
      "https://storage.googleapis.com/wineshop-assets/wine-shop.json"
    );
    // console.log(response.data);
    commit("SET_PRODUCTS", response.data);
  },
  ADD_ITEM({ commit }, item) {
    commit("ADD_ITEM", item);
    commit("CALCULATE_TOTAL");
  },
  DEL_ITEMS({ commit }) {
    commit("DEL_ITEMS");
    commit("CALCULATE_TOTAL");
  },
  FILTER_ITEMS({ commit }, query) {
    commit("FILTER_ITEMS", query);
  },
  SORT_ITEMS({ commit }, query) {
    commit("SORT_ITEMS", query);
  },
  // SET_PRODUCTS()
};

const mutations = {
  //synchronous
  SET_PRODUCTS: (state, products) => (state.products = products),
  FILTER_ITEMS(state, query) {
    // var state2 = [...state.products];

    state.products = state.products.filter(function(el) {
      return el.tags.includes(query);
    });
  },
  SORT_ITEMS(state, type) {
    if (type === "bottle") {
      state.products = state.products.sort(function(a, b) {
        return a.cost.bottle - b.cost.bottle;
      });
    }

    if (type === "case") {
      state.products = state.products.sort(function(a, b) {
        return a.cost.case - b.cost.case;
      });
    }

    if (type === "name") {
      state.products = state.products.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    }
  },
  ADD_ITEM(state, item) {
    var arr = state.items;
    const index = arr.findIndex((e) => e.item.no === item.no);

    if (index === -1) {
      state.items = [...state.items, { item }];
    } else {
      state.items[index].qtty = item.qtty;
    }

    console.log(state);
  },
  CALCULATE_TOTAL() {
    var sum = 0;
    state.items.forEach((i) => {
      var bottles = i.item.qtty.bottle * i.item.cost.bottle;
      var cases = i.item.qtty.case * i.item.cost.case;

      var s = bottles + cases;

      sum += s;
    });
    state.total = sum.toFixed(2);
  },
  DEL_ITEMS(state) {
    state.items = [];
    state.total = 0;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

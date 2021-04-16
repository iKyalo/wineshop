const state = {
  items: [],
};

const getters = {
  cartItems: (state) => state.items,
};

const actions = {
  //asynchronous
  async fetchCart() {
    return state.items;
  },
  ADD_ITEM({ commit }, item, qtty) {
    commit("ADD_ITEM", item, qtty);
  },
};

const mutations = {
  //synchronous
  FILTER_ITEMS(query) {
    var state2 = [...state.items];
    state2.filter(function(el) {
      return el.tags.includes(query);
    });
  },
  SORT_ITEMS(type) {
    if (type === "b_price") {
      state.items.sort(function(a, b) {
        return a.cost.bottle - b.cost.bottle;
      });
    }

    if (type === "c_price") {
      state.items.sort(function(a, b) {
        return a.cost.case - b.cost.case;
      });
    }

    if (type === "name") {
      state.items.sort(function(a, b) {
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
    // var key = Object.keys(state).find((no) => state[no] === item.no);
    // var jj = state.filter(function(el) {
    //   return el.no === 13;
    // });
    // function updateCart(items, value, qtty) {
    //   for (var i in items) {
    //     if (items[i].no == item) {
    //       items[i].qtty = qtty;
    //       break; //Stop this loop, we found it!
    //     }
    //   }
    // }
    function pushToArray(arr, obj) {
      const index = arr.findIndex((e) => e.id === obj.id);

      if (index === -1) {
        arr.push(obj);
      } else {
        arr[index] = obj;
      }
    }
    updateCart(state.items);
    // console.log(jj);
    state.items = [...state.items, { item }];
    console.log(state);
  },
  DEL_ITEMS(state) {
    state.items = [];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

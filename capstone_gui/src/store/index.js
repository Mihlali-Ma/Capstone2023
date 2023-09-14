import { createStore } from 'vuex'
import axios from 'axios'

const Url ="https://movie-vnl6.onrender.com/"
export default createStore({
  state: {
    users: null,
    User: null,
    Product: null,
    Products: null,
    spinner: false,
    token: null,
    msg: null,
    loggedIn: false,
    errorMessage: '',

  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    deleteUserById(state, id) {
      state.users = state.users.filter(user => user.userID !== id);
    },

    addProduct(state, data) {
      state.Products = data
    },
    setUser(state, value) {
      state.User = value
    },
    register(state, newUser) {
      state.users.push(newUser);
    },
    setProducts(state, value) {
      state.Products = value
    },

    setProduct(state, value) {
      state.Product = value;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    logout(state) {
      state.loggedIn = false;
      state.User = null;
      state.errorMessage = '';
    },
    loginSuccess(state, user) {
      state.loggedIn = true;
      state.User = user;
      state.errorMessage = '';
    },
    loginFailure(state, errorMessage) {
      state.loggedIn = false;
      state.User = null;
      state.errorMessage = errorMessage;
    },
  },
  actions: {
    async createProduct(context, newProd) {
      try {
        const { data } = await axios.post(`${Url}products`, newProd);
        context.commit("addProduct", data.result);
        location.reload()
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },

    async fetchUser({ commit }) {
      commit('setSpinner', true);
      try {
        const response = await axios.get(`${Url}user/${id}`);
        const user = response.data.user;
        commit('setUser', user);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        commit('setSpinner', false);
      }
    },

    async fetchUsers({ commit }) {
      commit('setSpinner', true);
      try {
        const response = await axios.get(`${Url}users`);
        const users = response.data.results;
        commit('setUsers', users);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        commit('setSpinner', false);
      }
    },

    async fetchProduct({ commit }) {
      commit('setSpinner', true);
      try {
        const response = await axios.get(`${Url}product/${id}`);
        const product = response.data.product;
        commit('setProduct', product);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        commit('setSpinner', false);
      }
    },

    async fetchProducts({ commit }) {
      commit('setSpinner', true);
      try {
        const response = await axios.get(`${Url}products`);
        const products = response.data.results;
        commit('setProducts', products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        commit('setSpinner', false);
      }
    },

    async deleteUser(context, id){
      try {
        const {msg} = (await axios.delete(`${Url}user/${id}`)).data
        if(msg) {
          const updatedUsers = state.users.filter(user => user.UserID !== id);
          commit('setUsers', updatedUsers);
        }
      } catch (error) {
          console.error('Error deleting user:', error);
      }
    },

    async deleteProduct(context, id){
      try {
        const {msg} = (await axios.delete(`${Url}product/${id}`)).data
        if(msg) {
          const updatedProducts = state.Products.filter(product => Product.prodID !== id);
          commit('setProducts', updatedProducts);
          
        }
      } catch (error) {
          console.error('Error deleting user:', error);
      }
    },

    // async register(context, newUser) {
    //   try {
    //     const response = await fetch(`${Url}register`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(newUser),
    //     });
    
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    
    //     const data = await response.json();
    
    //     console.log('Response from server:', data);
      
    //   } catch (e) {
    //     console.error('Error:', e.message);
      
    //   }
    // }
    async register(context, { firstName, lastName, age, emailadd, userImg, userPass }) {
      try {
        const response = await fetch(`${Url}register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            age,
            emailadd,
            userImg,
            userPass,
          }),
        });
    
        if (response.ok) {
          console.log('User was added successfully');
        } else {
          console.error('Failed to add user');
        }
      } catch (e) {
        console.error('Error:', e.message);
      }
    },
    async AddProducts(context, { MovieName,agerating, MovieCategory,MovieDesc, Ticket_price, MovieCast,MovieWriter,MovieDirector,MovieMusic,Trailor,MoviePoster }) {
      try {
        const response = await fetch(`${Url}products`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            MovieName,
            agerating,
            MovieCategory,
            MovieDesc,
            Ticket_price,
            MovieCast,
            MovieWriter,
            MovieDirector,
            MovieMusic,
            Trailor,
            MoviePoster
          }),
        });
    
        if (response.ok) {
          console.log('New movie has been succefully added');
        } else {
          console.error('Failed to add a new movie');
        }
      } catch (e) {
        console.error('Error:', e.message);
      }
      },
      async SignIn({ commit }, { emailadd, userPass }) {
        try {
          const response = await axios.post(`${Url}login`, { emailadd, userPass });
          
          if (response.data.success) {
            const user = response.data.user;
            commit('loginSuccess', user);
          } else {
            commit('loginFailure', 'either email address or password submitted is incorrect ');
          }
        } catch (e) {
          console.error('Login error:', e);
          commit('loginFailure', 'failed to login user');
        }
      },
      logout({ commit }) {
        ('logout');
      },
    
  },
  modules: {
  },
  
})

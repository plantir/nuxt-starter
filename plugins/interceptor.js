export default function(ctx) {
  let { $axios, redirect } = ctx
  $axios.defaults.timeout = 0
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code == 504) {
      // redirect('/no-internet');
    }
    if (code === 401) {
      return redirect('/login')
    }
  })
}

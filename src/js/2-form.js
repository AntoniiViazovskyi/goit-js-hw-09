let formData = { email: '', message: '' }

const form = document.querySelector('.feedback-form')

const email = form.querySelector('input')
const textArea = form.querySelector('textarea')

try {
  const savedData = localStorage.getItem('feedback-form-state')

  if (savedData) {
    formData = JSON.parse(savedData)
  }
  email.value = formData.email || ''
  textArea.value = formData.message || ''
} catch (error) {
  console.log(error.message)
}

form.addEventListener('input', handleInput)
form.addEventListener('submit', handleSubmit)

function handleInput(event) {
  const { name, value } = event.target
  formData[name] = value
  localStorage.setItem('feedback-form-state', JSON.stringify(formData))
}

function handleSubmit(event) {
  event.preventDefault()
  if (!email.value.trim() || !textArea.value.trim()) {
    alert('Fill please all fields')
    return
  }
  console.log(formData)
  formData = { email: '', message: '' }
  localStorage.removeItem('feedback-form-state')
  form.reset()
}

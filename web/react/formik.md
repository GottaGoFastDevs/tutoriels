# Formik

## Sans Formik
```jsx
function ProfileForm() {

  const [firstname, setFirstname] = useState("")
  
  function validateFirstname() {
    if (firstname === undefined) {
      throw new Error("Le champ est requis")
    }
    if (typeof firstname === String) {
      throw new Error("Le champ n'est pas une chaîne de caractère")
    }
  }
  
  return (
    <form>
      <input value={firstname} onChange={(event) => setFirstname(event.target.value)} />
    </form>
  )
}
```


## Avec Formik
```jsx
const profileFormSchema = Yup.object().shape({
  firstname: Yup.string().required(),
})

function ProfileForm() {
  const user = useUser()

  const handleSubmit = async (values) => {
    console.log(values)
  }
  
  return (
    <>
      <Formik
        validationSchema={profileFormSchema}
        initialValues={
          user.data ?? {
            firstname: "",
          }
        }
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid gap-4">
            <TextField label="First name" name="firstname" />
            <button className="form-btn">Update your profile</button>
          </div>
        </Form>
      </Formik>
    </>
  )
}

```

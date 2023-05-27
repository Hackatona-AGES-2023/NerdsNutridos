const baseUrl = 'http://localhost:3000'

async function createUser(conversation: string) {
  try {
    const res = await fetch(`${baseUrl}/createUser`, {
      method: 'POST',
      headers: {
        conversation: JSON.stringify(conversation),
      },
    })

    const data = await res.json()

    if (!data.uid) throw new Error('No uid returned from server')

    return {
      uid: data.uid as string,
      data: data.data as Record<string, unknown>,
    }
  } catch (err) {
    console.error(err)
  }
}

async function getUserInfo(uid: string) {
  try {
    const res = await fetch(`${baseUrl}/user/${uid}`)

    const data = await res.json()

    if (!data.uid) throw new Error('No user returned from server')

    console.log('user recieved from the back')

    console.log(data)
    return data as {
      uid: string
      data: Record<string, unknown>
    }
  } catch (err) {
    console.error(err)
  }
}

async function updateUserInfo(uid: string, conversation: string) {
  try {
    const res = await fetch(`${baseUrl}/updateUser/${uid}`, {
      method: 'POST',
      headers: {
        conversation: JSON.stringify(conversation),
      },
    })

    const data = await res.json()

    console.log('data from updateUserInfo', data)

    console.log(data)

    // if (!data.user) throw new Error('No user returned from server')

    // console.log('user recieved from the back')
    // console.log(data.user)
    return {
      data: data,
    }
  } catch (err) {
    console.error(err)
  }
}

export { createUser, getUserInfo, updateUserInfo }

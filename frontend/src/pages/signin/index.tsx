import React from 'react'
import SignInForm from 'components/SignInForm'
import {
  AccountIcon,
  RegisterIcon,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Wrapper
} from './styles'
import auth from 'api/auth'

export default function SignIn() {
  return (
    <Wrapper>
      <TabsRoot defaultValue="tab1">
        <TabsList aria-label="Manage your account">
          <TabsTrigger value="tab1">Login</TabsTrigger>
          <TabsTrigger value="tab2">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <AccountIcon />
          <SignInForm
            action="Log In"
            request={auth.login}
            message="Login successful!"
          />
        </TabsContent>
        <TabsContent value="tab2">
          <RegisterIcon />
          <SignInForm
            action="Register"
            request={auth.register}
            message="Success! User account has been created."
          />
        </TabsContent>
      </TabsRoot>
    </Wrapper>
  )
}

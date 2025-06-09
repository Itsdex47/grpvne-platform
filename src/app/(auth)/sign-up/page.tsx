import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-grape-50 via-white to-vine-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-grape-500 to-vine-500 rounded-lg"></div>
            <span className="text-2xl font-bold gradient-text">GRPVNE</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Join GRPVNE</h1>
          <p className="text-muted-foreground">Start automating your creative workflows today</p>
        </div>
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-gradient-to-r from-grape-500 to-vine-500 hover:from-grape-600 hover:to-vine-600",
              card: "shadow-lg border border-border",
            }
          }}
        />
      </div>
    </div>
  )
}
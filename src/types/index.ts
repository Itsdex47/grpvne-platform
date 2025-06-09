// Core workflow types
export interface WorkflowStep {
  id: string
  type: WorkflowStepType
  name: string
  description?: string
  service: string
  parameters: Record<string, any>
  dependencies: string[]
  retryConfig?: RetryConfig
  position: { x: number; y: number }
  outputs?: string[]
}

export interface WorkflowTrigger {
  id: string
  type: TriggerType
  schedule?: string // cron expression
  webhook?: string
  conditions?: TriggerCondition[]
}

export interface TriggerCondition {
  field: string
  operator: 'equals' | 'contains' | 'greater_than' | 'less_than'
  value: any
}

export interface RetryConfig {
  maxRetries: number
  backoffMultiplier: number
  initialDelay: number
}

// Workflow step types
export type WorkflowStepType = 
  | 'ai_text_generation'
  | 'ai_image_generation'
  | 'ai_video_generation'
  | 'ai_audio_generation'
  | 'social_post'
  | 'conditional'
  | 'delay'
  | 'webhook'
  | 'data_transform'
  | 'file_upload'
  | 'email_send'

export type TriggerType = 
  | 'manual'
  | 'schedule'
  | 'webhook'
  | 'rss_feed'
  | 'social_mention'

export type ExecutionStatus = 
  | 'pending'
  | 'running'
  | 'completed'
  | 'failed'
  | 'cancelled'

// AI Service types
export interface AIServiceConfig {
  provider: AIProvider
  model: string
  parameters: Record<string, any>
  rateLimits: RateLimit
  costPerCall: number
}

export type AIProvider = 
  | 'openai'
  | 'anthropic'
  | 'midjourney'
  | 'stability'
  | 'eleven_labs'
  | 'runway'
  | 'pika'

export interface RateLimit {
  requestsPerMinute: number
  requestsPerDay: number
  tokensPerMinute?: number
}

// Social platform types
export type SocialPlatform = 
  | 'instagram'
  | 'tiktok'
  | 'youtube'
  | 'twitter'
  | 'linkedin'
  | 'facebook'
  | 'pinterest'

// User and subscription types
export interface UserProfile {
  id: string
  clerkId: string
  email: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  subscriptionTier: SubscriptionTier
  brandGuidelines?: BrandGuidelines
  contentPillars: string[]
  toneOfVoice?: string
}

export interface BrandGuidelines {
  colorPalette: string[]
  fonts: string[]
  logoUrl?: string
  visualStyle: Record<string, any>
  doNotUse: string[]
}

export type SubscriptionTier = 'FREE' | 'STARTER' | 'PROFESSIONAL' | 'ENTERPRISE'

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
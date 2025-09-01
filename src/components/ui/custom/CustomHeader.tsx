interface Props {
  title: string
  description: string
}
export const CustomHeader = ({ title, description }: Props) => {
  return (
    <div className='text-center mb-8'>
      <h1
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        className='text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600  text-transparent mb-4'
      >
        {title}
      </h1>
      <p className='text-gray-600 text-lg'>{description}</p>
    </div>
  )
}

// force dynamic when deploy with external apis
export const dynamic = 'force-dynamic'

export default async function BioPage() {
  const request = await fetch('https://baconipsum.com/api/?type=all-meat&para=5')
  const bioDate = await request.json();

  return (
    <div className='row'>
      <article>
        <div className='mb-4 mt-4'>
          <h2 className='fw-bolder mb-1'>
            Hokusai Bio
          </h2>
        </div>
        <section className='mb-5'>
          {bioDate.map((bio, idx) => (
            <p key={idx} className='fs-5 mb-4'>
              {bio}
            </p>
          ))}
        </section>
      </article>
    </div>
  )
}
import Link from "next/link";

const AlimentForm = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Aliment</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share amazing aliments with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Aliment Name
          </span>
          <input
            value={post.name}
            onChange={(e) => setPost({ ...post, name: e.target.value })}
            type='text'
            placeholder='Name'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Calories
          </span>
          <input
            value={post.calories}
            onChange={(e) => setPost({ ...post, calories: e.target.value })}
            type='number'
            placeholder='Calories'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Protein
          </span>
          <input
            value={post.protein}
            onChange={(e) => setPost({ ...post, protein: e.target.value })}
            type='number'
            placeholder='Protein'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Fat
          </span>
          <input
            value={post.fat}
            onChange={(e) => setPost({ ...post, fat: e.target.value })}
            type='number'
            placeholder='Fat'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Carbs
          </span>
          <input
            value={post.carbs}
            onChange={(e) => setPost({ ...post, carbs: e.target.value })}
            type='number'
            placeholder='Carbs'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Price
          </span>
          <input
            value={post.price}
            onChange={(e) => setPost({ ...post, price: e.target.value })}
            type='number'
            placeholder='Price'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AlimentForm;
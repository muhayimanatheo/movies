import PropTypes from 'prop-types'

function Card({ Title, Year, Time, src }) {
  return (
    <div className="w-[13rem] px-4 border-1 border-white">
      <img src={src} className="w-full h-auto object-cover my-3 sm:w-64 sm:h-auto" />
      <h1 className="text-black">{Title}</h1>
      <p className="text-black">{Year}</p>
      <p className="text-black">{Time}</p>
    </div>
  );
}

Card.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Time: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default Card;

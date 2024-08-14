/* eslint-disable */

export default function TextInput(props) {
  return (
    <div>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
        className="block w-full rounded-md border-0 py-1.5 p-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
      />
    </div>
  );
}

// id="email"
//       name="email"
//       type="email"
//       autoComplete="email"
//       placeholder= {props.placeholder}
//       required

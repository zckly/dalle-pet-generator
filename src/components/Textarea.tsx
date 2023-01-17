const Textarea = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  return (
    <div className="w-1/2">
      <label
        htmlFor="about"
        className="block text-sm font-medium text-gray-700"
      >
        Describe your pet
      </label>
      <div className="mt-1">
        <textarea
          id="about"
          name="about"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="A small gray labradoodle named Billy with lopsided ears"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Textarea;

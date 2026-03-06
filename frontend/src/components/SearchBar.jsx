import Input from "./ui/Input";

export default function SearchBar({ search, setSearch }) {
  return (
    <Input
      placeholder="Search product..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
import { Pagination } from "flowbite-react";
import { useState } from "react";

function PaginationSearchPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page); // Hapus anotasi tipe `: number`

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}

export default PaginationSearchPage;

import DiscountSection from "@/components/Discount/discount";

export default function DiscountPage({ searchParams }: { searchParams?: { offer?: string } }) {
  return <DiscountSection initialOfferId={searchParams?.offer} />;
}


import Image from "next/image";
import Link from "next/link";

const CustomErrorPage = () => {
  return (
    <center className="mt-2">
      <Link href="/">
        <Image
          src="https://m.media-amazon.com/images/G/31/x-locale/common/small-logo._CB485933674_.gif"
          height={36}
          width={126}
          alt="Amazon logo"
        />
      </Link>
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td>
              <Image
                src="https://m.media-amazon.com/images/G/31/x-locale/common/kailey-kitty._CB485935150_.gif"
                height={35}
                width={40}
                alt="Question icon"
              />
            </td>
            <td>
              <b className="font-medium text-c-orange">
                Looking for something?
              </b>
              <br />
              <span>
                We're sorry. The Web address you entered is not a functioning
                page on our site.
              </span>
              <br />
              <b className="relative">
                <span className="absolute top-1/2 -translate-y-1/2 w-0 h-0 border-4 border-solid border-transparent border-l-c-orange"></span>
                <span className="ml-3">
                  Go to Prod-amazon's{" "}
                  <Link href="/" className="text-[#004B91] underline">
                    Prod-amazon
                  </Link>{" "}
                  Page
                </span>
              </b>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  );
};

export default CustomErrorPage;

import { StudentLayout } from "@/app/components/StudentLayout";

export default function CssPart6() {
  return (
    <StudentLayout>
      <div className="container py-4">
        <h2 className="mb-4 text-center">CSS Missing Recording</h2>

        <div className="container py-5 minh800">
          {/* <h2 className="fw-bold text-center text-white mb-5">
                        Wynxio Class Demos
                    </h2> */}

          <div className="row justify-content-center">
            {/* Demo Class Part 1 */}
            <div className="col-lg-8 mb-5">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-4">
                  <h4 className="fw-semibold mb-3 text-center">CSS Part 6</h4>
                  <div className="ratio ratio-16x9">
                     <video controls className="rounded-3 w-100" muted>
                      <source
                        src="https://www.fileswynxio.com/uploads/66455234-c356-4aa8-a136-51d187b3bca7.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>

                    
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}

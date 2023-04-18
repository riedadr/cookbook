import { IconDeviceFloppy, IconEye } from "@tabler/icons-react";
import React from "react";

export default function ProfileFormLoading() {
	return (
		<>
			<div className="mt-8">
				<div className="flex justify-between items-baseline">
					<span className="w-52 h-7 animate-pulse bg-neutral rounded"></span>
					<span className="text-sm w-40 h-5 animate-pulse bg-neutral rounded"></span>
				</div>
				<div className="flex gap-4 mt-4 items-end">
					<div>
						<div className="avatar pt-2">
							<div className="w-32 h-32 rounded-full animate-pulse bg-neutral"></div>
						</div>
					</div>
					<div className="w-full">
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<div className="w-full h-12 bg-neutral animate-pulse rounded"></div>
							<label className="label">
								<span className="label-text">Profilbild</span>
							</label>
							<div className="flex gap-4">
								<div className="w-full h-12 bg-neutral animate-pulse rounded"></div>

								<button
									className="btn"
									type="button"
									disabled={true}
								>
									<IconEye />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-8 w-full flex justify-end">
					<button
						className="btn btn-primary flex gap-2"
						type="submit"
						disabled={true}
					>
						<IconDeviceFloppy /> speichern
					</button>
				</div>
			</div>
		</>
	);
}
